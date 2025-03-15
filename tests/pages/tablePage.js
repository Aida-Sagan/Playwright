// class TablePage {
//     constructor(page) {
//         this.page = page;
//     }

//     async goto(page) {
//         await page.goto('https://the-internet.herokuapp.com/tables');
//     }

//     async getRowCount(page) {
//         return await page.locator('#table1 tbody tr').count();
//     }
// }

class TablePage {
    constructor(page) {
        this.page = page;
        this.table = page.locator('#table1'); // локатор таблицы
    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/tables');
    }

    async getRowCount() {
        return await this.table.locator('tbody tr').count();
    }
}