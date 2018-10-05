unction array_even()												//声明一个新方法
{																					
var i,even=this[0]; 														//声明变量i和even
	for(i=0;i<=this.Length;i++)     								//设置for循环
	{
	if (i%2==0)																//判断角标的奇偶性
	even.push(this[i]);													//如果角标是偶数则把该元素添加到even数组
	}
}

Array.prototype.even = array_even; 						//声明even并将其加入Array.prototype
var x = newArray;														
var y = x.even();															
