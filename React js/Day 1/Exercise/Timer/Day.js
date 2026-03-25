const root = ReactDOM.createRoot(document.getElementById("root"));

function myClock() {
    const time = dayjs().format("HH:mm:ss");

    root.render(
        <h1 className="clock-style">
            Current Time: {time}</h1>
    );
}

myClock();

setInterval(() => {
    myClock();
}, 1000);