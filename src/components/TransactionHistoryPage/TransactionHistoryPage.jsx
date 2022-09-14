const TransactionHistoryPage = ({changePageHandler}) => {
    return ( <>
        <h1>TransactionHistoryPage{}</h1>
        <button
        type="button"
        onClick={() => {
          changePageHandler('main');
        }}
      >
        Back to Main
      </button>
      </>
    )
}

export default TransactionHistoryPage;