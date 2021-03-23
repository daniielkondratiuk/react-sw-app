import React, {useState} from 'react'

const ErrorBoundry = ({children}) => {
	const [isError, setIsError] = useState(false)
	const onError = () => {
		setIsError(true)
	}

	if (isError) {
		return <h1 className='text-center'>Ops, something wrong</h1>
	}

	return React.Children.map(children, child => React.cloneElement(child, {onError}))
}

export default ErrorBoundry
