const CustomForm = () => {
    
    const handleFormSubmit =(e) => {
        e.preventDefault();
    }

    return (
    <form 
    className="todo" 
    onSubmit={handleFormSubmit}>
    <div className="wrapper">
        <h1>test</h1>
    </div>
    </form>
  )
}

export default CustomForm
