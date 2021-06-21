import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap'
import * as yup from 'yup'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const Signup = () => {
	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	})
	
	const schema = yup.object().shape({
		firstName: yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
		lastName: yup.string().required('Required'),
		email: yup.string().required('Required'),
		password: yup.string().required('Required'),
		terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
	})

	return (
		<Container fluid>
			<Row>
				<Col>
					<Formik
						validationSchema={schema}
						onSubmit={async (values) => {
							await sleep(500)
							alert(JSON.stringify(values, null, 2))
						}}
						initialValues={{
							firstName: '',
							lastName: '',
							email: '',
							password: '',
							terms: false,
						}}
					>
						{({
							isSubmitting,
							handleSubmit,
							handleChange,
							handleBlur,
							values,
							touched,
							isValid,
							errors,
						}) => (
							<Form noValidate onSubmit={handleSubmit}>
								<Form.Group controlId="validationFormik01">
									<Form.Label>First name</Form.Label>
									<Form.Control
										type="text"
										name="firstName"
										value={values.firstName}
										onChange={handleChange}
										isInvalid={touched.firstName && !!errors.firstName}
									/>
									<Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
								</Form.Group>
								<Form.Group controlId="validationFormik02">
									<Form.Label>Last name</Form.Label>
									<Form.Control
										type="text"
										name="lastName"
										value={values.lastName}
										onChange={handleChange}
										isInvalid={touched.lastName && !!errors.lastName}
									/>
									<Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
								</Form.Group>

								<Form.Group controlId="validationFormikEmail">
									<Form.Label>Email address</Form.Label>
									<InputGroup hasValidation>
										<InputGroup.Prepend>
											<InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
										</InputGroup.Prepend>
										<Form.Control
											type="email"
											placeholder="Email"
											aria-describedby="inputGroupPrepend"
											name="email"
											value={values.email}
											onChange={handleChange}
											isInvalid={!!errors.email}
										/>
										<Form.Control.Feedback type="invalid">
											{errors.email}
										</Form.Control.Feedback>
									</InputGroup>
								</Form.Group>

								<Form.Group controlId="validationFormikPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control
										type="password"
										name="password"
										value={values.password}
										placeholder="Password"
										onChange={handleChange}
										isInvalid={touched.password && !!errors.password}
									/>
									<Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
								</Form.Group>

								<Form.Group>
									<Form.Check
										required
										name="terms"
										label="Agree to terms and conditions"
										onChange={handleChange}
										isInvalid={!!errors.terms}
										feedback={errors.terms}
										id="validationFormikTerms"
									/>
								</Form.Group>
								<Button type="submit" disabled={isSubmitting}>Sign up</Button>
							</Form>
						)}
					</Formik>

				</Col>
			</Row>
		</Container>
	)
}

export default Signup