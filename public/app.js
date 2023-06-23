$('#content').pagination({
    dataSource:'/user?page=1',
    locator : 'data' , 
    totalNumberLocator: function(response) {
        // you can return totalNumber by analyzing response content
        return response.total
    } , 
    pageSize: 2,
    afterPageOnClick : function(e,pageNumber){
        loadPage(pageNumber)
    } ,
    afterPreviousOnClick : function(e,pageNumber){
        loadPage(pageNumber)
    },
    afterNextOnClick : function(e,pageNumber){
        loadPage(pageNumber)  
    }
})   


function loadPage(page){
    const arrImg = document.querySelectorAll('.totalImg img')
    $('.contain').html('')
    fetch('/user?page='+page)
    .then(data=>{
       return data.json()
    })
    .then(dataOriginal =>{
        console.log(dataOriginal)

        for(let element = 0 ; element < dataOriginal.data.length ; element++){
            console.log('/img/'+dataOriginal.data[element].url)
            arrImg[element].src = '/img/'+dataOriginal.data[element].url
            const item = (`<h1>${dataOriginal.data[element].username} <br> </h1>`)
           $('.contain').append(item)
        }
       
    })
}    
loadPage(1)

