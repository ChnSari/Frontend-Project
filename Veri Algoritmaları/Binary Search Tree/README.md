

# Binary Search Tree (BST) Design

This project demonstrates the step-by-step insertion process and the final structure of a **Binary Search Tree (BST)** created using the following dataset.


---


![Portfolio Preview](img/1.png)

---


```bash
[7, 5, 1, 8, 3, 6, 0, 9, 4, 2]
```

---

## Binary Search Tree Logic

**Binary Search Tree rules**:

* All values in the left subtree are smaller than the parent node.

* All values in the right subtree are greater than the parent node.

* This rule applies recursively to every node.

* Duplicate values are not allowed.


---

```bash

   Binary Search Tree

            7
         /     \
        5       8
      /   \       \
     1     6       9
    / \
   0   3
      / \
     2   4

```

---

## Step-by-Step Insertion

* 7 → Inserted as the root node.

* 5 → 5 < 7 → Inserted to the left of 7.

* 1 → 1 < 7 → 1 < 5 → Inserted to the left of 5.

* 8 → 8 > 7 → Inserted to the right of 7.

* 3 → 3 < 7 → 3 < 5 → 3 > 1 → Inserted to the right of 1.

* 6 → 6 < 7 → 6 > 5 → Inserted to the right of 5.

* 0 → 0 < 7 → 0 < 5 → 0 < 1 → Inserted to the left of 1.

* 9 → 9 > 7 → 9 > 8 → Inserted to the right of 8.

* 4 → 4 < 7 → 4 < 5 → 4 > 1 → 4 > 3 → Inserted to the right of 3.

* 2 → 2 < 7 → 2 < 5 → 2 > 1 → 2 < 3 → Inserted to the left of 3.

---

##  Developer

**Cihan Sarı**

* GitHub: https://github.com/ChnSari
* LinkedIn: https://linkedin.com/in/cihansri
* Email: [cihannsri@gmail.com](mailto:cihannsri@gmail.com)

---

##  Installation

Clone the repository:

```bash
git clone https://github.com/ChnSari/binary-search-tree.git
```

---

##  License

[MIT](https://choosealicense.com/licenses/mit/)
