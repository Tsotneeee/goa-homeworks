from turtle import *

speed(35)
width(3)

color("grey")
begin_fill()
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
end_fill()

#end of square

forward(70)
left(90)

color("brown")
begin_fill()

forward(84)
right(90)

forward(36)
right(90)
forward(84)

end_fill()

#end of door

color("red")

penup()
goto(200, 200)
pendown()

begin_fill()
right(180)
left(50)
forward(136)

left(82)
forward(130)

end_fill()

#end of roof 

color("blue")

penup()
goto(155, 150)
pendown()

begin_fill()
left(48)
forward(44)

right(90)
forward(50)

right(90)
forward(48)

right(90)
forward(50)
end_fill()


exitonclick()