import tkinter as tk

# Define the window
root = tk.Tk()
root.title("px to rem Converter")

# Define input and output labels and fields
px_label = tk.Label(root, text="Enter px value:")
px_entry = tk.Entry(root, width=10)

rem_label = tk.Label(root, text="rem value:")
rem_entry = tk.Entry(root, width=10)

# Define base font size input (optional)
base_font_label = tk.Label(root, text="Base font size (px):")
base_font_entry = tk.Entry(root, width=5)

# Define conversion function
def convert_px_to_rem():
  try:
    px_value = float(px_entry.get())
    base_font_size = float(base_font_entry.get() or 16)
    rem_value = px_value / base_font_size
    rem_entry.delete(0, tk.END)
    rem_entry.insert(0, f"{rem_value:.2f}")
  except ValueError:
    rem_entry.delete(0, tk.END)
    rem_entry.insert(0, "Invalid input")

# Define button and bind conversion function
convert_button = tk.Button(root, text="Convert", command=convert_px_to_rem)

# Arrange widgets on the window
px_label.pack()
px_entry.pack()
base_font_label.pack()
base_font_entry.pack()
convert_button.pack()
rem_label.pack()
rem_entry.pack()

# Run the application
root.mainloop()
