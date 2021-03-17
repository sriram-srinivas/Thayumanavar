export  const data = {
    menuList:[
        {Name:"Home",route:"/",Description:"Mauris vel faucibus neque. Mauris id lectus interdum, semper nulla nec, tempus diam. Donec interdum tincidunt tortor vitae fermentum.",isHomePage:true},
        {Name:"Catalouge",route:"/catalouge",Icon:"LibraryBooks",Description:"Integer lobortis, diam dapibus consequat vulputate, ipsum nisi lacinia ligula, ut suscipit arcu tellus non neque."},
        {Name:"About Us",route:"/about",Icon:"Info",Description:"Aenean odio purus, porttitor et nisl in, sodales tincidunt tellus. Nam tempor turpis nibh tempor faucibus. "},
        {Name:"Contact",route:"/contact",Icon:"PermContactCalendar",Description:"Nulla ut lectus pretium, aliquam mauris sed, eleifend lacus. Donec congue laoreet tellus, at laoreet justo tempor id."}],
    LanguageList:[
        {Name:"Tamil",width: '30%',url:"../resources/images/Tamil_IMG.jpg"},
        {Name:"English",width: '30%',url:"src/resources/images/English_IMG.jpg"},
        {Name:"Hindi",width: '30%',url:"src/resources/images/Hindi_IMG.jpg"}],
    BookList_columns:[{ field: 'Title', headerName: 'Title', width: "70%" },
    { field: 'Rent', headerName: 'Rent', width: "15%" },
    { field: 'Max_Days', headerName: 'Max. Days', width: "15%" }],

}