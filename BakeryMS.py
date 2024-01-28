import sqlite3
import datetime

class BakeryManagementSystem:
    def __init__(self):
        self.conn = sqlite3.connect('bakery.db')
        self.cursor = self.conn.cursor()
        self.create_tables()

    def create_tables(self):
        self.cursor.execute('''
            CREATE TABLE IF NOT EXISTS inventory (
                item_id INTEGER PRIMARY KEY AUTOINCREMENT,
                item_name TEXT,
                quantity INTEGER,
                price REAL
            )
        ''')
        self.cursor.execute('''
            CREATE TABLE IF NOT EXISTS sales (
                sale_id INTEGER PRIMARY KEY AUTOINCREMENT,
                item_id INTEGER,
                quantity INTEGER,
                total_price REAL,
                sale_date TEXT,
                FOREIGN KEY (item_id) REFERENCES inventory (item_id)
            )
        ''')
        self.conn.commit()

    def add_item(self, item_name, quantity, price):
        self.cursor.execute('INSERT INTO inventory (item_name, quantity, price) VALUES (?, ?, ?)',
                            (item_name, quantity, price))
        self.conn.commit()

    def display_inventory(self):
        self.cursor.execute('SELECT * FROM inventory')
        inventory = self.cursor.fetchall()
        print("\nBakery Inventory:")
        for item_id, item_name, quantity, price in inventory:
            print(f"{item_id}. {item_name}: {quantity} available - ${price} per unit")

    def make_sale(self, item_id, quantity):
        sale_date = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        self.cursor.execute('SELECT * FROM inventory WHERE item_id=?', (item_id,))
        result = self.cursor.fetchone()
        if result and result[2] >= quantity:
            total_price = quantity * result[3]
            self.cursor.execute('UPDATE inventory SET quantity=? WHERE item_id=?', (result[2] - quantity, item_id))
            self.cursor.execute('INSERT INTO sales (item_id, quantity, total_price, sale_date) VALUES (?, ?, ?, ?)',
                                (item_id, quantity, total_price, sale_date))
            self.conn.commit()
            print(f"\nSold {quantity} {result[1]}(s) for ${total_price} on {sale_date}")
        else:
            print("\nInsufficient stock or invalid item ID")

    def display_sales(self):
        self.cursor.execute('''
            SELECT sales.sale_id, inventory.item_name, sales.quantity, sales.total_price, sales.sale_date
            FROM sales
            INNER JOIN inventory ON sales.item_id = inventory.item_id
        ''')
        sales = self.cursor.fetchall()
        print("\nSales Records:")
        for sale_id, item_name, quantity, total_price, sale_date in sales:
            print(f"{sale_id}. {item_name}: {quantity} - Total: ${total_price} ({sale_date})")

    def __del__(self):
        self.conn.close()

def main():
    bakery_system = BakeryManagementSystem()
    
    input("Enter your name: ")
    input("Enter your mobile number: ")
    
    while True:
        print("\nBakery Management System:")
        print("1. Add Item to Inventory")
        print("2. Display Inventory")
        print("3. Make Sale")
        print("4. Display Sales Records")
        print("5. Exit")

        choice = input("Enter your choice (1-5): ")

        if choice == '1':
            item_name = input("Enter item name: ")
            quantity = int(input("Enter quantity: "))
            price = float(input("Enter price per unit: "))
            bakery_system.add_item(item_name, quantity, price)
        elif choice == '2':
            bakery_system.display_inventory()
        elif choice == '3':
            bakery_system.display_inventory()
            item_id = int(input("Enter the ID of the item you want to sell: "))
            quantity = int(input("Enter quantity to sell: "))
            bakery_system.make_sale(item_id, quantity)
        elif choice == '4':
            bakery_system.display_sales()
        elif choice == '5':
            print("Exiting Bakery Management System. Goodbye!")
            break
        else:
            print("Invalid choice. Please enter a number between 1 and 5.")

if __name__ == "__main__":
    main()
