import { useState } from "react"

export default function useForm(initialForm = {}) {
    const [formState, setFormState] = useState(initialForm)

    const hanglerInputChange = function (e) {
        const { target } = e
        setFormState((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    const hanglerResetForm = function () {
        setFormState(initialForm)
    }

    return {
        ...formState,
        hanglerInputChange,
        hanglerResetForm
    }
}

