# TIPS:
# -> give self to each method/funciton to execute otherwise error will be thrown.
# -> private variable using self.__backaccount
# -> To inherit the class

# ------------------------------------------------------------------------------------------------------
# Basic class syntax:
# class Person:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def greet(self):
#         print(f"Hello my name is {self.name}")


# person1 = Person("Ankit", 30)
# person1.greet()

# ------------------------------------------------------------------------------------------------------
# 1. Encapsultation : Hiding internal data and showing only what's necessary. ( Using private varaibles)
# class BankAccount:
#     def __init__(self):
#         self.__bankAccount = 0

#     def detail(self, accountNo):
#         if accountNo == "111":
#             print(f"this is the detial", "ankit etc")
#         else:
#             print(f"not found")

#     def addBalance(self, amount):
#         self.__bankAccount += amount
#         print("Balnce added successylly")

#     def checkBalance(self):
#         print(f"{self.__bankAccount}")
# bankDetail = BankAccount()
# bankDetail.detail("111")
# bankDetail.addBalance(299909090)
# bankDetail.checkBalance()

# ------------------------------------------------------------------------------------------------------
# 2. Inheritance : A class can inherit properties and methods from another class.
# class Animal:
#     def livingBeing(self):
#         print(f"The animal {self.type} is a living being.")

# class Frog(Animal):
#     def __init__(self):
#         self.type = "Dog"

# frog = Frog()
# frog.livingBeing() # calling inherited

# 3. Polymorphism : Different classes can implement the same method in different ways.
# Same method but different class can use it differently
# Creating two classes with same method:
# class Bird:
#     def speak(self):
#         print("tweet")


# class Dog:
#     def speak(self):
#         print("Bark")

# # calling  a function to dynamically change the class and fetching the appropriate class method
# def animal_sound(animal):
#     animal.speak()
# animal_sound(Bird())

# ------------------------------------------------------------------------------------------------------
# 4. Abstraction: Hiding complex implementation and showing only essentials using abstract class

# from abc import ABC, abstractmethod
# #Abstracted class hiddedn complex  :only method avvailable to execute
# class BaseClass(ABC):
#     @abstractmethod
#     def check(self):
#         pass


# class InheritBase(BaseClass):
#     def check(self):
#         print("Inherited called based class")

# inherit = InheritBase()
# inherit.check()

# ------------------------------------------------------------------------------------------------------
# ------------------------------------------------------------------------------------------------------
# Projects : Bank System – Create accounts, deposit/withdraw, check balance.
# class Account:
#     def __init__(self):
#         self.accountName = ""
#         self.age = 0
#         self.address = ""
#         self.__balance = 0

#     def createAccount(self, name, age, address):
#         self.accountName = name
#         self.age = age
#         self.address = address
#         self.__balance = 0

#         print(f"Account created successfully for {self.accountName}")

#     def deposit(self, amount):
#         self.__balance += amount
#         print(f"DEposited successfully for {self.accountName}")

#     def withdraw(self, amount):
#         balanceCheck = self.__balance - amount
#         if balanceCheck > 0:
#             print("Amount withdrawn")
#         else:
#             print("Count not process with transaction")


# -------------------------------------------------------------------------------------------
# An abstract class is a class that cannot be instantiated directly and is meant to be
# inherited by other classes. It serves as a blueprint for derived (child) classes.
