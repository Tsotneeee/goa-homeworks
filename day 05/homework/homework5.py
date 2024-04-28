from turtle import *

shape('turtle')
penup()
goto(200, -250)
pendown()


#drawing 3 houses, a sun and a star
speed(0)
width(7)
color("brown")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#end of drawing a square

#drawing a door
begin_fill()
forward(70)
color("red")
left(90)
forward(120)
right(90)
forward(60)
right(90)
forward(120)
end_fill()
#end of drawing a door

#drawing first window
begin_fill()
penup()
goto(250, -120)
pendown()
color("yellow")
right(90)
forward(35)
right(90)
forward(40)
right(90)
forward(35)
right(90)
forward(40)
end_fill()

#end of drawing first window


#drawing second window

begin_fill()
penup()
goto(390, -120)
pendown()
right(90)
forward(35)
right(90)
forward(40)
right(90)
forward(35)
right(90)
forward(40)
end_fill()

#end of drawing second window

#drawing a roof

color("brown")
penup()
goto(400, -55)
pendown()
begin_fill()
right(150)
forward(170)
left(110)
forward(190)
end_fill()

#end of drawing a roof

#end of drawing first house

#second house

penup()
right(50)
forward(50)
pendown()
color("black")

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

#drawing a door of second house
penup()
left(90)
forward(200)
right(90)
forward(120)
pendown()
color("red")

begin_fill()
begin_fill()
right(90)
forward(70)
right(90)
forward(40)
right(90)
forward(70)
end_fill()

#end of drawing a door for second house

#drawing first window

penup()
left(180)
forward(160)
pendown()
color("blue")
begin_fill()

right(90)
forward(40)

right(90)
forward(40)

right(90)
forward(40)

right(90)
forward(40)

end_fill()

#end of drawing first window

#drawing second window

penup()
left(90)
forward(50)
pendown()
begin_fill()

forward(40)
left(90)

forward(40)
left(90)

forward(40)
left(90)

forward(40)
left(90)

end_fill()
#end of second window

#drawing a roof
penup()
right(90)
forward(40)
right(90)
forward(125)
pendown()
color("black")
begin_fill()

left(120)
forward(200)

left(120)
forward(200)

end_fill()

#end of seond house

#drawing third house

penup()
right(60)
forward(50)
pendown()
color("purple")

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

#drawing a roof

begin_fill()
penup()
right(55)
pendown()

forward(160)
left(105)
forward(165)

end_fill()

#end of drawing a roof

#drawing first window
begin_fill()
penup()
left(40)
forward(40)
left(90)
forward(25)
pendown()
color("green")

forward(40)
right(90)

forward(40)
right(90)

forward(40)
right(90)

forward(40)
right(90)

end_fill()
#end of drawing first window

#drawing second window

begin_fill()
penup()
forward(100)
pendown()

forward(40)
right(90)

forward(40)
right(90)

forward(40)
right(90)

forward(40)
right(90)

end_fill()

#end of drawing second window

#drawing a door
penup()
right(90)
forward(70)
pendown()
color("orange")
begin_fill()

forward(100)
penup()
right(90)
forward(50)
pendown()
right(90)

forward(100)
right(90)
forward(50)

end_fill()

#end of drawing houses

#drawing a sun

color("yellow")
penup()
goto(450, 150)
pendown()
begin_fill()

circle(100)

end_fill()

#end of drawing a sun

#drawing a star

width(4)
penup()
goto(-150, 250)
pendown()

left(55)
forward(120)

right(120)
forward(120)

left(210)
forward(140)

right(147)
forward(130)

right(153)
forward(140)

exitonclick()