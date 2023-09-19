const PRESSURE_UNITS = 0.750062

export const getPressureMm = (hpa) => {
  return Math.round(hpa * PRESSURE_UNITS)
}

export const getTime = (secs) => {
  return new Date(secs * 1000).toLocaleTimeString('ru-RU', {timeZone: 'Atlantic/Reykjavik'})
}