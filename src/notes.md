void returns undefined
never returns nothing

type ( & )
interface (extend)

difference btw type and interface is primarily
syntax e.g. type extension syntax

ctrl + space on component line to autoimport


// 
// interface BearState {
// 	bears: number;
// 	increase: (by: number) => void;
// 	increment: () => void;
// }



// const useBearStore = create<BearState>()((set) => ({
// 	bears: 0,
// 	increase: (by) => set((state) => ({ bears: state.bears + by })),
// 	increment: () => set((state) => ({ bears: (state.bears += 1) })),
// }));



	// {
	// 	/* <h1>Bears: {bears}</h1> */
	// }
	// {
	// 	/* <button onClick={increment}>Increment</button> */
	// }