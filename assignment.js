//kilometerToMeter
function kilometerToMeter(value) {
    if (value < 0) {
        return "Distance cannot be negative. Please enter a positive number."
    }
    else if (isNaN(value)) {
        return "Please enter a number."
    }
    else {
        var meter = value * 1000;
        return meter;
    }
}

//budgetCalculator
function budgetCalculator(watch, mobile, laptop) {
    if (watch < 0) {
        return "Number of watches cannot be negative. Please enter a valid number.";
    }
    else if (mobile < 0) {
        return "Number of mobiles cannot be negative. Please enter a valid number.";
    }
    else if (laptop < 0) {
        return "Number of laptops cannot be negative. Please enter a valid number.";
    }
    else if (Number.isInteger(watch, mobile, laptop)) {
        watchPrice = watch * 50;
        mobilePrice = mobile * 100;
        laptopPrice = laptop * 500;
        totalPrice = watchPrice + mobilePrice + laptopPrice;
        return totalPrice;
    }
    else {
        return "Please enter an integer number."
    }
}

//hotelCost
function hotelCost(days) {
    totalCost = 0;
    if (days < 0) {
        return "Days cannot be negative. Please enter a valid number.";
    }
    else if (isNaN(days)) {
        return "Please enter your number of days.";
    }
    else {
        if (Number.isInteger(days)) {
            if (days <= 10) {
                totalCost = days * 100;
            }
            else if (days <= 20) {
                firstTenDays = 10 * 100;
                remainingDays = days - 10;
                secondTenDays = remainingDays * 80;
                totalCost = firstTenDays + secondTenDays;
            }
            else {
                firstTenDays = 10 * 100;
                secondTenDays = 10 * 80;
                remainingDays = days - 20;
                nextDays = remainingDays * 50;
                totalCost = firstTenDays + secondTenDays + nextDays;
            }
            return totalCost;
        }
        else {
            return "Please enter an integer number.";
        }

    }
}

