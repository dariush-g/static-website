class Main {
    constructor() {
        this.pageViewsKey = 'pageViewsCount';
        this.clickCount = 'clickCount';
        this.initializeCounter();
        this.initializeClickCounter();
        this.displayCount();
        this.displayClickCount();


        document.addEventListener("click", (event) => {
            this.incrementCount();
            this.displayClickCount();
            if (event.target.id === "section1_button") {
                event.target.style.backgroundColor = "red";
            }
        });
    }

    initializeCounter() {
        if (!localStorage.getItem(this.pageViewsKey)) {
            localStorage.setItem(this.pageViewsKey, '0');
        }
    }

    initializeClickCounter() {
        if (!localStorage.getItem(this.clickCount)) {
            localStorage.setItem(this.clickCount, '0');
        }    
    }

    incrementClickCount() {
        let currentCount = parseInt(localStorage.getItem(this.clickCount));
        currentCount++;
        localStorage.setItem(this.clickCount, currentCount.toString());
    }

    displayClickCount() {
        this.incrementClickCount();

        document.getElementById('clickCount').innerHTML = 'You have clicked ' + localStorage.getItem(this.clickCount)  + ' times on this page.'
    }
    
    incrementCount() {
        let currentCount = parseInt(localStorage.getItem(this.pageViewsKey));
        currentCount++;
        localStorage.setItem(this.pageViewsKey, currentCount.toString());
    }

    displayCount() {
        this.incrementCount();
        // Update count in div id count
        document.getElementById('count').innerHTML = 'You have visited this page ' + localStorage.getItem(this.pageViewsKey)  + ' times.'
    }
}

// Note that we construct the class here, but we don't need to assign it to a variable.
document.mainClass = new Main();
