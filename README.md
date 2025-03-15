# GDGoC-DGU-Website

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FGDSC-DGU%2Fgdsc-dgu&count_bg=%23FFA300&title_bg=%23FFCA32&icon=&icon_color=%23E7E7E7&title=GDGoC+DGU&edge_flat=true)](https://hits.seeyoufarm.com)

## 📌 Branch Strategy

### 1️⃣ Starting Development
1. **Create an Issue** before starting development.
2. **Create a new branch** from the `Dev` branch of the origin repository.
3. **Branch naming conventions:**
   - 🚀 **Feature development** → `feature/#<Issue Number>`
   - 🎨 **Refactoring** → `refactor/#<Issue Number>`
   - 🐛 **Bug fixes** → `bug/#<Issue Number>`
4. **Fetch the newly created branch** (`feature`, `refactor`, or `bug`) to your local repository.
5. **Checkout to the branch** and start development.

### 2️⃣ Completing Development
1. **Create a Pull Request (PR)** referencing the Issue.
2. **Follow the PR title format:**
   - ✨ **Feature development** → `✨ Feature - Description (#PR Number)`
     - _Example:_ `✨ Feature - Implement FCM integration (#123)`
   - 🎨 **Refactoring** → `🎨 Refactor - Description (#PR Number)`
     - _Example:_ `🎨 Refactor - Renamed folders and completed integration test (#124)`
   - ❗ **Bug fixes** → `❗ Bug - Description (#PR Number)`
     - _Example:_ `❗ Bug - Fixed folder name issue and tested integration (#125)`
3. **Code Review & Approval:**
   - team members review the PR.
   - The last person to approve **performs the Confirm Squash Merge.**

## 📌 Commit Convention

| **Commit Type** | **Description**                                                              |
| -------------- | ---------------------------------------------------------------------------- |
| **Feat**       | Add new features                                                             |
| **Fix**        | Fix bugs                                                                     |
| **Docs**       | Modify documentation                                                        |
| **Style**      | Code formatting, missing semicolons, no changes to the code itself          |
| **Refactor**   | Code refactoring                                                            |
| **Test**       | Add test code, refactor test code                                           |
| **Chore**      | Modify package manager, and other miscellaneous changes (e.g., `.gitignore`) |
| **Design**     | Change user UI design, such as CSS                                          |
| **Comment**    | Add or modify necessary comments                                            |
| **Rename**     | Only changes to file or folder names or locations                           |
| **Remove**     | Only performing the action of deleting files                                |

## 📌 PR Convention

| **Icon** | **Code**                    | **Description**                     |
| -------- | --------------------------- | ----------------------------------- |
| 🧑🏻‍🎨    | `:art`                      | Improve code structure/formatting  |
| ⚡️      | `:zap`                      | Performance improvement            |
| 🔥      | `:fire`                     | Delete code/files                  |
| 🐛      | `:bug`                      | Fix bugs                           |
| 🚑      | `:ambulance`                | Urgent fixes                       |
| ✨      | `:sparkles`                 | Introduce new features             |
| 💄      | `:lipstick`                 | Add/modify UI/style files          |
| ⏪      | `:rewind`                   | Revert changes                     |
| 🔀      | `:twisted_rightwards_arrows` | Merge branches                     |
| 💡      | `:bulb`                     | Add/modify comments                |
| 🗃      | `:card_file_box`            | Database-related changes           |

 
