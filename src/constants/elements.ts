import {
  CalculatorElementsType,
  WeatherImageMapType,
} from "@/types/elementsType.ts";

export const CALCULATOR_BUTTONS: CalculatorElementsType[] = [
  {
    value: "7",
    className: "number",
  },
  {
    value: "8",
    className: "number",
  },
  {
    value: "9",
    className: "number",
  },
  {
    value: "+",
    text: "+",
    className: "operator",
  },
  {
    value: "4",
    className: "number",
  },
  {
    value: "5",
    className: "number",
  },
  {
    value: "6",
    className: "number",
  },
  {
    value: "-",
    text: "-",
    className: "operator",
  },
  {
    value: "1",
    className: "number",
  },
  {
    value: "2",
    className: "number",
  },
  {
    value: "3",
    className: "number",
  },
  {
    value: "*",
    text: "×",
    className: "operator",
  },
  {
    value: "allClean",
    text: "AC",
    className: "setting",
  },
  {
    value: "0",
    className: "number",
  },
  {
    value: "calculator",
    text: "=",
    className: "operator",
  },
  {
    value: "/",
    text: "÷",
    className: "operator",
  },
];

export const WEATHER_IMAGE_MAP_BUTTONS: WeatherImageMapType[] = [
  { label: "기온", value: "TA2" },
  { label: "강수량", value: "PAR0" },
  { label: "풍향", value: "WND" },
];
