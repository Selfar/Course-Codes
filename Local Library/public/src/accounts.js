function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

//Did some reading and learned that the localeCompare method was created to avoid making the 'if' statements and/or changing case.
function sortAccountsByLastName(accounts) {
  return accounts.sort((first, second) =>
		first.name.last.localeCompare(second.name.last)
  );
}

function getAccountFullNames(accounts) {
  return accounts.map((person) => `${person.name.first} ${person.name.last}`);
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
