var app = new Vue ({
    el: '#app',
    data: {
        books: [{
            title: "SampleBook",
            coverImage: "img.jpeg",
            author: "SampleAuthor" ,
            favorite: false,
            publishDate: "SampleDate",
        },
        {
            title: "SampleBook",
            coverImage: "",
            author: "SampleAuthor" ,
            favorite: false,
            publishDate: "SampleDate",
        },
        {
            title: "SampleBook",
            coverImage: "",
            author: "SampleAuthor" ,
            favorite: false,
            publishDate: "SampleDate",
        },],
        favoriteBooks: [{
            title: "",
            coverImage: "",
            author: "" ,
            publishDate: "",
        },],
        criteria: ""
    },
    methods: {
        searchBooks() {
            var url1 = "http://openlibrary.org/search.json?q=" + criteria;
            var isbn = [];
            var url2 = "https://openlibrary.org/api/books?bibkeys=ISBN:" + isbn + "&jscmd=details&format=json";
        }, 
        favoriteItem() {
            this.item
        },
        unfavoriteItem() {

        }
    },
    template: '<div> {{ criteria }} </div>',
})