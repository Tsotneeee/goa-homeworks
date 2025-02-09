def name_input():
    name = input("enter name: ")
    response = "welcome back "
    return response + name

def age_input():
    age = input("enter your age: ")
    response1 = "you are "
    return response1 + age

def final_function():
    return name_input() + "  " + age_input()

print(final_function())