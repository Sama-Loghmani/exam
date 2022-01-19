const randomGenerator = () => {
    const random = Math.floor(Math.random() * 20 + 1);

    if (random >= 1 && random <= 10) {
        console.log("Positive");
    } else if (random >= 11 && random <= 15) {
        console.log("neutral");
    } else {
        console.log("negative");
    }
};

randomGenerator();
