function returnProblemSet() {
    let JSON_Array = [
        {
            "Inputs": ["p", "q"],
            "Outputs": [
                ["Out1", function () { return op.or(op.not(ArrayOfIn[0].getOutput(0)), ArrayOfIn[1].getOutput(0)); }]
            ],
            "Elements": ["Half_Adder", "Half_Adder", "Half_Adder", "Const_In1", "Const_In1", "Const_In1"],
            "Message" : "Construct p=>q using Half_Adder"
        },

    ]

    return JSON_Array;
}

const ProblemSet = returnProblemSet();