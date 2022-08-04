function kiemtrarong (value,selectorError,name){
    // var valid = true

    if(value === ''){
        document.querySelector(selectorError).innerHTML = name + 'không được bỏ trống'
        return false
    }
        document.querySelector(selectorError).innerHTML = ''
    return true
    
}

function kiemtrakytu(value,selectorError,name){
    var regex = /^[a-z A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/
    if(regex.test(value)){
        document.querySelector(selectorError).innerHTML = ''
        return true
    }
    document.querySelector(selectorError).innerHTML = name + 'tất cả phải là ký tự'
    return false
}

function kiemtraso(value,selectorError,name){
    var regex = /^[0-9]+$/
    if(regex.test(value)){
        document.querySelector(selectorError).innerHTML = ''
        return true
    }
    document.querySelector(selectorError).innerHTML = name + 'tất cả phải là số'
    return false
}
function kiemtraemail(value,selectorError,name){
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(regex.test(value)){
        document.querySelector(selectorError).innerHTML = ''
        return true
    }
    document.querySelector(selectorError).innerHTML = name + 'phải đúng định dạng ! VD : abc@domain.com '
    return false
}
function kiemtradodai(value,selectorError,name,minlength,maxlength){
    if(value.length > maxlength || value.length < minlength){
       document.querySelector(selectorError).innerHTML = name + ' phải từ ' + minlength + ' đến ' + maxlength + ' ký số'
         return false
    }
    document.querySelector(selectorError).innerHTML = ''
    return true
}
function kiemtragiolam(value,selectorError,name,time1,time2){
    if(value < time1 || value > time2 ){
       document.querySelector(selectorError).innerHTML = name + ' trong tháng từ ' + time1 + ' đến ' + time2 + ' giờ '
         return false
    }
    document.querySelector(selectorError).innerHTML = ''
    return true
}
function kiemtramatkhau (value,selectorError,name){
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/
    if(regex.test(value)){
        document.querySelector(selectorError).innerHTML = ''
        return true
    }
    document.querySelector(selectorError).innerHTML = name + ' từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt),không để trống'
    return false
}