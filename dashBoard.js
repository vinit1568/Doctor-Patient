

getTotalOrder(data){
    return this.$http.get(this.GETTOTALORDER,{params:data})
}




getProcessingOrder(data){
    return this.$http.get(this.GETPROCESSINGORDER,{params:data})
}




getIntransitOrder(data){
    return this.$http.get(this.GETINTRANSITORDER,{params:data})
}



getCancelledOrder(data){
    return this.$http.get(this.GETCANCELLEDORDER,{params:data})
}



getDeliverdOrder(data){
    return this.$http.get(this.GETDELIVERDORDER,{params:data})
}




getDeliverdOrder(data){
    return this.$http.get(this.GETRETURNORDER,{params:data})
}



getActiveProduct(data){
    return this.$http.get(this.GETACTIVEPRODUCT,{params:data})
}



getDeactiveProduct(data){
    return this.$http.get(this.GETINACTIVEPRODUCT,{params:data})
}


getTotalOrderGraph(data){
    return this.$http.get(this.GETTOTALORDERGRAPH,{params:data})
}