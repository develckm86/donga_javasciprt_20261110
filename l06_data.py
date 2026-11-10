#let a=10
a=10; #세미콜론을 사용하지 않지만 써도 오류는 없다
b=20.0 
c=20
print(a+b+c)
# TypeError: can only concatenate str (not "int") to str
print("a+b+c="+str(a+b+c))
print(f"a+b+c={(a+b+c)}")
#class = 형(data의 형)
print(type(b),type(c))
print(type(10.0),type(10))
#수의 비교연산은 데이터가 아니라 값을 비교
print(10 == 10.0) #true => True
print("10" == 10) #False (파이썬은 바로 엄격하게 비교)
#ValueError: invalid literal for int() with base 10: '��'
#대부분 언어는 형변환 실패시 오류! => js만 NaN 상태
a=int("십")
print(type(a))
