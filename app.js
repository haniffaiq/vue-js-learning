new Vue({
    el: '#app',
    data: {
        lorem : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magnam laborum minus inventore ipsam aliquid neque voluptate iste quidem! Tempora consectetur aliquam, est doloremque reprehenderit atque recusandae similique cum quam",
        header : "My Blog",
        name : "Hanif Faiq",
        job1 : "Researcher",
        job2 : "Developer",
        date : "",
        myFacebook : "https://www.facebook.com/ssb.garecs.9",
        myLinkedIn : "https://www.linkedin.com/in/hanif-f-706215134/",
        myTwitter : "https://twitter.com/hanif_faiq",
        myInstagram : "https://www.instagram.com/haniffaiq95/",

        bil1: 0,
        bil2 : 0,
        o : ''
    },
    //rekomendasi menggunakan computed , karena fungsi akan di jalankan sekali walaupun di pakai 100x, selama nilainya tidak berubah
    methods: {
        greet(){
            var time = new Date()
            var hour = time.getHours()
            var minute = time.getMinutes()
            var clock = hour + "." + minute
            this.date = clock
            if(hour < 12){
                return "Good Morning"
            }
            if(hour >= 12 && hour < 17){
                return "Good Afternoon"
            }
            if(hour >= 17 && hour < 19){
                return "Good Evening"
            }
            if(hour >= 19 && hour <= 24){
                return "Good Night"
            }
            
        }

    },
    computed : {
        hasil (){
            switch(this.o){
                case "+":
                    return parseFloat(this.bil1) + parseFloat(this.bil2)
                    break;
                case "-":
                    return parseFloat(this.bil1) + parseFloat(this.bil2)
                    break;
                case "x":
                    return parseFloat(this.bil1) + parseFloat(this.bil2)
                    break;
                case "/":
                    return parseFloat(this.bil1) + parseFloat(this.bil2)
                    break;
            }
        }
    }
})