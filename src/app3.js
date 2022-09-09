import './app3.css'
import $ from "jquery"

const $square = $('#app3 .square')

$square.on('click',()=>{
    $square.toggleClass('active')
    // toggleClass() 对设置或移除被选元素的一个或多个类进行切换。 该方法检查每个元素中指定的类。如果不存在则添加类,如果已设置则删除。
})