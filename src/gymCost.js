// the question asks us to calculate the cost but there is no base cost given. Instead I just calculated the discount amount, hopefully this is ok
export function gymCost(friends){
    let discount=0
    if (friends==0){
        discount=0
    }else if(friends==1){
        discount=5
    }else if(friends==2){
        discount=10
    }else{
        discount=15
    }
    
    return discount
}