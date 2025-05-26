# CREATIONAL DESIGN PATTERNS
# These patterns abstract the instantiation process, making the system more flexible and decoupled.

# ---------------------------------------------------------------------------------------------------------
# 1. SINGLETON PATTERN

# 📌 Intent: Ensure a class has only one instance and provide a global point of access to it.

# class Singleton:
#     _instance = None

#     def __new__(cls):
#         if cls._instance is None:
#             print("Creating new instance")
#             cls._instance = super(Singleton, cls).__new__(cls)
#         return cls._instance

# a = Singleton()
# b = Singleton()
# print(a is b)

# Explanation:
# _instance = None: A class-level variable (static variable) that will store the single instance of the Singleton class. Initially, it’s set to None because no instance exists yet.
# The underscore (_) indicates that _instance is a protected attribute, a convention to discourage direct external access.

# __new__(cls): This is a special method in Python that controls object creation. It’s called before __init__ and is responsible for creating and returning a new instance of the class.
# Unlike __init__, which initializes an already-created object, __new__ constructs the object itself.
# cls refers to the class (Singleton in this case).
# super(Singleton, cls).__new__(cls): Calls the parent class’s (object) __new__ method to create a new instance of the Singleton class. This is the standard way to create an object in Python.


# class Database:
#     _sqlConected = False

#     def __new__(cls):
#         if cls._sqlConected is None:
#             print("Connecting to sql")
#             cls._sqlConected = super(Database, cls).__new__(cls)
#         return cls._sqlConected

# sqlConnection1 = Database()
# sqlConnection2 = Database()
# print(sqlConnection1 is sqlConnection2)


# -----------------------------------------------------------------------------------------------------------
# FACTORY DESIGN PATTERN
# Intent: Provides a way to create objects without specifying their exact class, delegating object creation to a factory method or class.
# It focuses on creating objects of a single family or type, with variations within that family.

# Delegate the responsibility of instantiating objects to factory methods, which can encapsulate the logic for object creation
# 📌 Intent: Define an interface for creating an object, but let subclasses decide which class to instantiate.
# Interface is needed to give common methods to all the classes.
# Define a common contract for all objects created by the factory.


# class Animal:
#     def speak(self):
#         pass

# class Dog(Animal):
#     def speak(self):
#         return "Woof!"

# class Cat(Animal):
#     def speak(self):
#         return "Meow!"

# class AnimalFactory:
#     def create_animal(self, animal_type):
#         if animal_type == "dog":
#             return Dog()
#         elif animal_type == "cat":
#             return Cat()

# factory = AnimalFactory()
# animal = factory.create_animal("dog")
# print(animal.speak())  # Woof!


# -----------------------------------------------------------------------------------------------------------
# ABSTRACT FACTORY DESIGN PATTERN
# 📌 Intent: Provide an interface for creating families of related objects without specifying their concrete classes.

# class Button:
#     def render(self): pass

# class WindowsButton(Button):
#     def render(self):
#         return "Windows Button"

# class MacButton(Button):
#     def render(self):
#         return "Mac Button"

# class GUIFactory:
#     def create_button(self): pass

# class WindowsFactory(GUIFactory):
#     def create_button(self):
#         return WindowsButton()

# class MacFactory(GUIFactory):
#     def create_button(self):
#         return MacButton()

# def render_ui(factory):
#     button = factory.create_button()
#     print(button.render())

# render_ui(WindowsFactory())  # Windows Button
# render_ui(MacFactory())      # Mac Button
