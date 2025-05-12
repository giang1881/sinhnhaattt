// Bắt đầu khi load trang
window.addEventListener('load', askForGift);

// Bắt đầu khi load trang
function askForGift() {
    Swal.fire({
        title: 'Cậu có muốn nhận món quà của tớ khônggg',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Có chứ',
        cancelButtonText: 'Không này',
    }).then((result) => {
        if (result.isConfirmed) {
            animationTimeline();
        } else {
            Swal.fire({
                title: 'Are you sure? 😥',
                text: 'Không nhận quà thật đó hả?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Thôi được rồi, nhận quà!',
                cancelButtonText: 'Không thèm!',
            }).then((result) => {
                if (result.isConfirmed) {
                    animationTimeline();
                } else {
                    Swal.fire({
                        title: 'Cậu không có lựa chọn đâu 😈',
                        icon: 'info',
                        showConfirmButton: false,     // ❌ Không hiển thị nút xác nhận
                        allowOutsideClick: false,     // ❌ Không cho click ra ngoài
                        allowEscapeKey: false,        // ❌ Không cho bấm ESC
                        timer: 1000,                  // ⏱️ Tự động đóng sau 2 giây
                        didOpen: () => {
                            // ✅ Sau khi hiện popup, bắt đầu animation
                            setTimeout(() => {
                                animationTimeline();
                            }, 1000); // Đồng bộ với timer
                        }
                    });
                }
            });
        }
    });
}


// animation timeline
const animationTimeline = () => {
    // split chars that needs to be animated individually
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];

    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    hbd.innerHTML = `<span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    }

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    }

    // timeline
    const tl = new TimelineMax();

    tl.to(".container", 0.6, {
        visibility: "visible"
    })
        .from(".one", 0.7, {
            opacity: 0,
            y: 10
        })
        .from(".two", 0.4, {
            opacity: 0,
            y: 10
        })
        .to(".one",
            0.7,
            {
                opacity: 0,
                y: 10
            },
            "+=3.5")
        .to(".two",
            0.7,
            {
                opacity: 0,
                y: 10
            },
            "-=1")
        .from(".three", 0.7, {
            opacity: 0,
            y: 10
        })
        .to(".three",
            0.7,
            {
                opacity: 0,
                y: 10
            },
            "+=3")
        .from(".four", 0.7, {
            scale: 0.2,
            opacity: 0,
        })
        .from(".fake-btn", 0.3, {
            scale: 0.2,
            opacity: 0,
        })
        .staggerTo(
            ".hbd-chatbox span",
            1.5, {
            visibility: "visible",
        },
            0.05
        )
        .to(".fake-btn", 0.1, {
            backgroundColor: "rgb(127, 206, 248)",
        },
            "+=1")
        .to(
            ".four",
            0.5, {
            scale: 0.2,
            opacity: 0,
            y: -150
        },
            "+=1")
        .from(".idea-1", 0.7, ideaTextTrans)
        .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
        .from(".idea-2", 0.7, ideaTextTrans)
        .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
        .from(".idea-3", 0.7, ideaTextTrans)
        .to(".idea-3 strong", 0.5, {
            scale: 1.2,
            x: 10,
            backgroundColor: "rgb(21, 161, 237)",
            color: "#fff",
        })
        .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
        .from(".idea-4", 0.7, ideaTextTrans)
        .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
        .from(
            ".idea-5",
            0.7, {
            rotationX: 15,
            rotationZ: -10,
            skewY: "-5deg",
            y: 50,
            z: 10,
            opacity: 0,
        },
            "+=1.5"
        )
        .to(
            ".idea-5",
            0.7, {
            scale: 0.2,
            opacity: 0,
        },
            "+=2"
        )
        .staggerFrom(
            ".idea-6 span",
            0.8, {
            scale: 3,
            opacity: 0,
            rotation: 15,
            ease: Expo.easeOut,
        },
            0.2
        )
        .staggerTo(
            ".idea-6 span",
            0.8, {
            scale: 3,
            opacity: 0,
            rotation: -15,
            ease: Expo.easeOut,
        },
            0.2,
            "+=1.5"
        )
        .to(".slideshow-container", 0.5, {
            display: "block",
            onComplete: startSlideshow
        })
        .to(".slideshow-container", 0.5, {
            opacity: 0,
            onComplete: () => {
                document.querySelector(".slideshow-container").style.display = "none";
            }
        }, "+=39")
        .staggerFromTo(
            ".baloons img",
            1.5, {
            opacity: 0.9,
            y: 1400,
        }, {
            opacity: 1,
            y: -1000,
        },
            0.2
        )
        .from(
            ".profile-picture",
            0.5, {
            scale: 3.5,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45,
        },
            "-=2"
        )
        .from(".hat", 0.5, {
            x: -100,
            y: 350,
            rotation: -180,
            opacity: 0,
        })
        .staggerFrom(
            ".wish-hbd span",
            0.7, {
            opacity: 0,
            y: -50,
            // scale: 0.3,
            rotation: 150,
            skewX: "30deg",
            ease: Elastic.easeOut.config(1, 0.5),
        },
            0.1
        )
        .staggerFromTo(
            ".wish-hbd span",
            0.7, {
            scale: 1.4,
            rotationY: 150,
        }, {
            scale: 1,
            rotationY: 0,
            color: "#ff69b4",
            ease: Expo.easeOut,
        },
            0.1,
            "party"
        )
        .from(
            ".wish h5",
            0.5, {
            opacity: 0,
            y: 10,
            skewX: "-15deg",
        },
            "party"
        )
        .staggerTo(
            ".eight svg",
            1.5, {
            visibility: "visible",
            opacity: 0,
            scale: 80,
            repeat: 3,
            repeatDelay: 1.4,
        },
            0.3
        )
        .to(".six", 0.5, {
            opacity: 0,
            y: 30,
            zIndex: "-1",
        })

}

function startSlideshow() {
    const images = [
        "img/052024.jpg",
        "img/062024.jpg",
        "img/072024.jpg",
        "img/082024.jpg",
        "img/092024.jpg",
        "img/102024.jpg",
        "img/112024.jpg",
        "img/122024.jpg",
        "img/012025.jpg",
        "img/022025.jpg",
        "img/032025.jpg",
        "img/042025.jpg",
        "img/052025.png"
    ];

    const captions = [
        "05/2024 - Tim tui hẫng một nhịp luôn á 🎂",
        "06/2024 - Sắp xa cậu này, vẫn xinh quá trờii ",
        "07/2024 - Slay chưa, slay chưa, Lan Anh thế chứ!!",
        "08/2024 - Ý là không nghĩ tớ chụp hình xinh vậy á, chắc là nhờ cậu",
        "09/2024 - Ờmmm...",
        "10/2024 - Nụ cười của cậu là ánh nắng",
        "11/2024 - Hình như bên Anh, đáng yêu chưa nàyy 💕",
        "12/2024 - Úi, thiên thần có thật trên đờiii",
        "01/2025 - ''Chúng ta bên nhau, chúng ta tin nhau, chúng ta tích cực công tác''",
        "02/2025 - Ý là tớ ngắm mãi luôn íii",
        "03/2025 - oh, đi ăn nhom nhom nàyy",
        "04/2025 - Em bé nhà ai cưng zayyy 🎉",
        ""
    ];

    let index = 0;
    // const imgEl = document.getElementById("slideshow");

    // setInterval(() => {
    //     index = (index + 1) % images.length;
    //     imgEl.style.opacity = 0;

    //     setTimeout(() => {
    //         imgEl.src = images[index];
    //         imgEl.style.opacity = 1;
    //     }, 500);
    // }, 3000);

    const imgEl = document.getElementById("slideshow");
    const captionEl = document.getElementById("caption");

    setInterval(() => {
        index = (index + 1) % images.length;

        // Làm mờ ảnh và caption trước khi đổi
        imgEl.style.opacity = 0;
        captionEl.style.opacity = 0;

        setTimeout(() => {
            imgEl.src = images[index];
            captionEl.innerText = captions[index];

            imgEl.style.opacity = 1;
            captionEl.style.opacity = 1;
        }, 500);
    }, 3000);


}
