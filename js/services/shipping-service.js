export function shipment(order) {

    if (order.basic < 100){
        return 20.00;
    } else if (order.basic> 200){
        return 0.0;
    } else{
        return 12.0;
    }

}