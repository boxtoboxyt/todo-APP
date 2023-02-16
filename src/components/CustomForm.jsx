import { PlusIcon } from '@heroicons/react/24/solid'

const CustomForm = () => {
    
    const handleFormSubmit =(e) => {
        e.preventDefault();
    }

    return (
    <form 
    className="todo" 
    onSubmit={handleFormSubmit}>
    <div className="wrapper">
        <input 
        type="text"
        id="task"
        className="input"
        onInput={(e) => setTask(e.target.value)}
        required
        autoFocus
        maxLength={60}
        placeholder="Entrer Tâches"
        />
        <label htmlFor="task"
        className="label"
        >Entrer Tâches</label>
    </div>
    <button 
    className="btn"
    aria-label="Ajout Tâches"
    type="submit"
    >
    <PlusIcon />
    </button>
    </form>
  )
}

export default CustomForm
