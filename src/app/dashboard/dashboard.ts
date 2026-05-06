import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
  searchText = '';
  filterStatus = 'All';

  stats = [
    { label: 'Total Products', value: 120, color: '#a78bfa' },
    { label: 'In Stock', value: 85, color: '#34d399' },
    { label: 'Out of Stock', value: 20, color: '#f87171' },
    { label: 'Low Stock', value: 15, color: '#fbbf24' }
  ];

  inventory = [
    { name: 'MacBook Pro', category: 'Electronics', stock: 12, price: 1299, status: 'In Stock' },
    { name: 'Office Chair', category: 'Furniture', stock: 3, price: 299, status: 'Low Stock' },
    { name: 'USB Hub', category: 'Electronics', stock: 0, price: 49, status: 'Out of Stock' },
    { name: 'Standing Desk', category: 'Furniture', stock: 7, price: 499, status: 'In Stock' },
    { name: 'Webcam HD', category: 'Electronics', stock: 2, price: 89, status: 'Low Stock' },
    { name: 'Keyboard', category: 'Electronics', stock: 0, price: 79, status: 'Out of Stock' },
    { name: 'Monitor 4K', category: 'Electronics', stock: 5, price: 399, status: 'In Stock' },
    { name: 'Notebook Set', category: 'Stationery', stock: 50, price: 19, status: 'In Stock' },
  ];

  get filteredInventory() {
    return this.inventory.filter(item => {
      const matchSearch = item.name.toLowerCase().includes(this.searchText.toLowerCase());
      const matchStatus = this.filterStatus === 'All' || item.status === this.filterStatus;
      return matchSearch && matchStatus;
    });
  }

  getStatusColor(status: string): string {
    switch(status) {
      case 'In Stock': return '#34d399';
      case 'Low Stock': return '#fbbf24';
      case 'Out of Stock': return '#f87171';
      default: return '#fff';
    }
  }

  confirmOrder(name: string) {
    alert(`Order confirmed for: ${name}`);
  }
}