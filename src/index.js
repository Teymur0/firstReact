import reactDom from 'react-dom'

function App() {
    const style = {
        backgroundColor: "red",
        fontSize: "50px",
        color: "gray"
    }
    const labelName = 'Enter name'
    const btnName = 'Ok'
    return (
        <div>
            <label>
                {labelName}
            </label>
            <input type='text' />
            <button>{btnName}</button>
            <div>
                <p style={style}>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reprehenderit nihil recusandae natus labore impedit, iusto aut, neque quo est ipsa officia cupiditate quasi magni maiores velit sint a deleniti!</p>
            </div>

        </div>
    )


}
reactDom.render(<App />, document.querySelector('#root'))