const app = new Vue( {
    el: '#root',
    data: {
        activeIndex: 0,
        scroll: '',
        arrSlides: [
            {
                img: '01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                img: '02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum',
            },
            {
                img: '03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                img: '04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            {
                img: '05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
        ]
    },
    methods: {
        previousThumb() {
            if (this.activeIndex == 0) {
                this.activeIndex = this.arrSlides.length - 1;  
            }else {
                this.activeIndex--;
            }
        },
        nextThumb() {
            if (this.activeIndex == this.arrSlides.length - 1) {
                this.activeIndex = 0;  
            } else {
                this.activeIndex++;
            }
        },
        autoScroll() {
            this.scroll = setInterval(this.nextThumb, 3000);
            
        },
        stopScroll(){
            clearInterval(this.scroll);
        }

    },
    created(){
        this.autoScroll();

    }

})
