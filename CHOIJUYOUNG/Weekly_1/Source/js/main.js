const getClock = () => {
  let time = new Date();
  const output = time.toLocaleTimeString();

  document.getElementById("nowtime").innerHTML = output;
};

getClock();
setInterval(getClock, 1000);
