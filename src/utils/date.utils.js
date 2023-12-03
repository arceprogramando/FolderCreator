const obtainCurrentDate = () => {
  const currentDate = new Date();
  return {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() + 1,
    day: currentDate.getDate(),
    hours: currentDate.getHours(),
    minutes: currentDate.getMinutes(),
    seconds: currentDate.getSeconds(),
    milliseconds: currentDate.getMilliseconds(),
    dayOfWeek: currentDate.getDay(),
  };
};

export default obtainCurrentDate;
