#include <stdio.h>

int main() {
    int p, q, r;
    int profit;

    // Read the inputs: number of units (p), selling price (q), and cost per unit (r)
    scanf("%d", &p);
    scanf("%d", &q);
    scanf("%d", &r);

    // Calculate total profit
    // Total Revenue = p * q
    // Total Cost = (p * r) + 5000 (Variable cost + Fixed monthly cost)
    // Profit = Total Revenue - Total Cost
    profit = (p * q) - ((p * r) + 5000);

    // Output the calculated profit
    printf("%d", profit);

    return 0;
}