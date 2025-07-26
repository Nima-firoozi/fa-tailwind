

    // selected

    const rList = document.querySelector(".rlist"),
        LList = document.querySelector(".llist"),
        listBtn = document.querySelector(".bi-list"),
        xRBtn = document.querySelector(".xrbtn"),
        xLBtn = document.querySelector(".xlbtn"),
        RLbtn = document.querySelector(".rlbtn"),
        LLbtn = document.querySelector(".llbtn"),
        subLR = document.querySelector(".sublr")


    // selected


    // open right or left list by size
    listBtn.addEventListener("click", () => {
        window.innerWidth >= 1280 ? rList.classList.replace("-right-full", "right-0") : LList.classList.replace("-left-full", "left-0")
    })
    // open right or left list by size

    // close lists by resize

    window.addEventListener("resize", () => {
        window.innerWidth >= 1280 ? closeLList() : closeRList()

    })

    // close lists by resize


    // close lists by click on window
    window.addEventListener("click", (e) => {
        const target = e.target
        if (!listBtn.contains(target)) {
            if (!LList.contains(target)) {
                closeLList()
                subLR.classList.replace("right-0", "right-full")
            }
            if (!rList.contains(target)) {
                closeRList()
            }
        }


    })


    // close lists by click on window
    // close right list by click on close button
    xRBtn.addEventListener("click", closeRList)
    // close right list by click on close button



    function closeRList() {
        rList.classList.replace("right-0", "-right-full")

    }

    function closeLList() {
        LList.classList.replace("left-0", "-left-full")
    }


    // close subList left list by click on button
    LLbtn.addEventListener("click", () => {
        subLR.classList.replace("right-0", "right-full")


    })
    // close right list by click on close button

    // open right list by click on open button

    RLbtn.addEventListener("click", () => {
        subLR.classList.replace("right-full", "right-0")
    })

    // open right list by click on open button

    // close left list by click on close button

    xLBtn.addEventListener("click", () => {
        closeLList()
    })

    // close left list by click on close button

