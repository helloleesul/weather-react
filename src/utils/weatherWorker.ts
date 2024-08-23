import { fetchWeatherData } from "@/api/weatherApi.ts";
import { CITIES } from "@/constants/cities.ts";

let intervalId: NodeJS.Timeout | null = null;

self.onmessage = async (event: MessageEvent) => {
  // 실행되는 인터벌을 중지하고 워커 종료
  if (event.data === "STOP") {
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
    self.close();
    return;
  }

  // 도시 인덱스
  let { cityIndex } = event.data;

  try {
    // 초기 날씨 데이터 fetch 및 전달
    const initData = await fetchWeatherData(CITIES[cityIndex]);
    self.postMessage({
      weather: initData,
      cityIndex,
    });

    // 10초마다 도시 인덱스를 업데이트하고 날씨 데이터 fetch
    intervalId = setInterval(async () => {
      cityIndex = (cityIndex + 1) % CITIES.length;

      try {
        const weatherData = await fetchWeatherData(CITIES[cityIndex]);
        self.postMessage({
          weather: weatherData,
          cityIndex,
        });
      } catch (error) {
        console.error("데이터 업데이트 중 오류 발생:", error);
      }
    }, 10000);
  } catch (error) {
    console.error("초기 데이터 페칭 중 오류 발생:", error);
  }
};
