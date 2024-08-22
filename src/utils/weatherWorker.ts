import { fetchWeatherData } from "@/api/weatherApi.ts";

// let regionIndex = 0;

self.onmessage = async (event: MessageEvent) => {
  const cities = event.data;

  try {
    const initData = await fetchWeatherData(cities[0]);
    self.postMessage({
      weather: initData,
    });

    // setInterval(async () => {
    //   regionIndex = (regionIndex + 1) % cities.length;
    //
    //   try {
    //     const weatherData = await fetchWeatherData(cities[regionIndex]);
    //     self.postMessage({
    //       weather: weatherData,
    //     });
    //   } catch (error) {
    //     console.error("주기적인 데이터 업데이트 중 오류 발생:", error);
    //   }
    // }, 10000);
  } catch (error) {
    // 초기 데이터 페칭 중 오류 처리
    console.error("초기 데이터 페칭 중 오류 발생:", error);
  }
};
