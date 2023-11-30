import cl from './FormsControl.module.css'

export const CreateForm =
	Component =>
		({ input, meta: { error, submitFailed }, ...props }) => {

			const hasError = error && submitFailed
			return (
				<>
					<div className={cl.formControl + ' ' + (hasError ? cl.error : '')}>
						<Component {...input} {...props} />
						<div>{hasError && <span>{error}</span>}</div>
					</div>
				</>
			)
		}
