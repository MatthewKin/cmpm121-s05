Section 5 – Refactored Code Implementation

The original code implemented a simple counter app that updated values in real time. However, it contained duplicated logic.

By applying Extract Function, I eliminated duplicated code and centralized UI logic into one clearly named function.
This makes the code easier to maintain, less error-prone, and simpler to extend in the future.
Now, changing the UI behavior (like background color or title format) only requires editing one function instead of three.
