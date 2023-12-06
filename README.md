TS6502
======

**Cycle-Accurate 6502 Emulator in TypeScript**

## Intro
TS6502 is a 6502 emulator written in TypeScript. The goal of this project 
is to create a CPU abstraction which can accurately emulate every cycle of 
every instruction, along with an architecture for integrating the CPU with 
other low-level hardware devices (IO such as a keyboard and LCD display).

## Some Background
I started tinkering with CPU emulation about a year ago with the hope of 
gaining a better understanding of how CPUs operate at the fundamental level.
I read several different tutorials on how to get started, and eventually 
coded my way up to a passable (READ: buggy) 6502 emulator in C++. However,
my emulator was executing entire instructions on each cycle, and some of these
instructions were quite complicated. I still didn't understand how the CPU
was breaking these down into manageable steps for boolean logic.

I took a break from the emulator approach and started building Ben Eater's 
Breadboard CPU. Everything fell into place for me when he explained the 
use of microcode as a way of grouping and ordering the logical operations 
into useful instructions. Armed with this new understanding, I wanted to 
rebuild my 6502 emulator using these micro-instructions to implement the 
instruction set, rather than just explicitly coding it. *And that brings 
us here!*

## Why TypeScript?
As I mentioned, my first 6502 emulator was written in C++. This is an obvious
choice for a CPU emulator since it gives you so much control over how memory
is allocated and used. The code just feels much *closer* to what it is 
you're trying to emulate. But...

As stated in the intro, my goal is to provide an architecture for integrating 
the CPU with emulated IO hardware. Given my skillset from a career in web 
development, I believe I'll be easier for me to implement IO and build a 
usable interface in a browser environment, rather than diving into C++ GUI 
like WPF or SDL. My only major concern using TypeScript/JS is performance,
but given the relative simplicity of the 6502 CPU and the speed of modern 
browsers and JS runtimes... I don't expect it to be an issue.

## Community
I welcome any and all feedback! I would like to implement the CPU core myself,
but I would be grateful for help when the time comes to begin coding IO devices.