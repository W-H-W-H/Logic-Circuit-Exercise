function returnProblemSet() {
    let JSON_Array = [
        //Special Question
        {
            "Inputs": ["P", "Q"],
            "Outputs": [
                ["P->Q", function () { return op.or(op.not(ArrayOfIn[0].getOutput(0)), ArrayOfIn[1].getOutput(0)); }]
            ],
            "Elements": ["Half_Adder", "Half_Adder", "Half_Adder", "Const_In1", "Const_In1", "Const_In1"],
            "Message": "Half_Adder Challenge\nConstruct P->Q"
        },

        //Warm-up problem
        {
            "Inputs": ["In1"],
            "Outputs": [
                ["Out1", function () { return op.not(ArrayOfIn[0].getOutput(0)); }]
            ],
            "Elements": ["NOT"],
            "Message": "Warm-up problem:\nConstruct NOT gate"
        },

        {
            "Inputs": ["In1", "In2"],
            "Outputs": [
                ["Out1", function () { return op.and(ArrayOfIn[0].getOutput(0), ArrayOfIn[1].getOutput(0)); }]
            ],
            "Elements": ["AND"],
            "Message": "Warm-up problem:\nConstruct AND gate"
        },

        {
            "Inputs": ["In1", "In2"],
            "Outputs": [
                ["Out1", function () { return op.or(ArrayOfIn[0].getOutput(0), ArrayOfIn[1].getOutput(0)); }]
            ],
            "Elements": ["OR"],
            "Message": "Warm-up problem:\nConstruct OR gate"
        },

        {
            "Inputs": ["In1", "In2"],
            "Outputs": [
                ["Out1", function () { return op.xor(ArrayOfIn[0].getOutput(0), ArrayOfIn[1].getOutput(0)); }]
            ],
            "Elements": ["XOR"],
            "Message": "Warm-up problem:\nConstruct XOR gate"
        },

        {
            "Inputs": ["P", "Q"],
            "Outputs": [
                ["P->Q", function () { return op.or(op.not(ArrayOfIn[0].getOutput(0)), ArrayOfIn[1].getOutput(0)); }]
            ],
            "Elements": ["NOT", "OR"],
            "Message": "Warm-up problem:\nConstruct P->Q gate\nHits: P->Q <=> (not P) or Q"
        },

        //More advance problem
        {
            "Inputs": ["In1", "In2"],
            "Outputs": [
                ["Out1", function () { return op.nand(ArrayOfIn[0].getOutput(0), ArrayOfIn[1].getOutput(0)); }]
            ],
            "Elements": ["NOT", "AND"],
            "Message": "Understanding basics:\nConstruct NAND gate"
        },

        {
            "Inputs": ["A0", "B0"],
            "Outputs": [
                ["S0", function () { return op.xor(ArrayOfIn[0].getOutput(0), ArrayOfIn[1].getOutput(0)); }],
                ["C1", function () { return op.and(ArrayOfIn[0].getOutput(0), ArrayOfIn[1].getOutput(0)); }]
            ],
            "Elements": ["XOR", "AND"],
            "Message": "Understanding basics:\nConstruct Half Adder"
        },

        {
            "Inputs": ["A0", "B0", "C0"],
            "Outputs": [
                ["S0", function () {
                    return op.xor(op.xor(ArrayOfIn[0].getOutput(0), ArrayOfIn[1].getOutput(0)), ArrayOfIn[2].getOutput(0));
                }],
                ["C1", function () {
                    let rc = ArrayOfIn.filter(ele => ele.getOutput(0) == "1").length >= 2
                    rc = rc == false ? "0" : "1";
                    return rc;
                }]
            ],
            "Elements": ["Half_Adder", "Half_Adder", "OR"],
            "Message": "Understanding basics:\nConstruct Full Adder"
        },

        //Understanding XOR

        {
            "Inputs": ["In1"],
            "Outputs": [
                ["Out1", function () {
                    return op.not(ArrayOfIn[0].getOutput(0));
                }]
            ],
            "Elements": ["XOR", "Const_In0", "Const_In1"],
            "Message": "Understanding XOR:\nConstruct NOT using XOR"
        },

        {
            "Inputs": ["In1", "In2"],
            "Outputs": [
                ["Out1", function () {
                    return op.xnor(ArrayOfIn[0].getOutput(0), ArrayOfIn[1].getOutput(0));
                }]
            ],
            "Elements": ["XOR", "Const_In0", "Const_In1"],
            "Message": "Understanding XOR:\nConstruct XNOR using XOR"
        },

        {
            "Inputs": ["In1"],
            "Outputs": [
                ["Out1", function () {
                    return ArrayOfIn[0].getOutput(0);
                }]
            ],
            "Elements": ["XOR", "Const_In0", "Const_In1"],
            "Message": "Understanding XOR:\nUsing XOR gate to output itself"
        },


        {
            "Inputs": ["In1"],
            "Outputs": [
                ["Out1", function () {
                    return op.not(ArrayOfIn[0].getOutput(0));
                }]
            ],
            "Elements": ["XNOR", "Const_In0", "Const_In1"],
            "Message": "Understanding XNOR:\nConstruct NOT using XNOR"
        },

        //Understanding De Morgan's Theorem
        {
            "Inputs": ["In1", "In2"],
            "Outputs": [
                ["Out1", function () {
                    return op.or(ArrayOfIn[0].getOutput(0), ArrayOfIn[1].getOutput(0));
                }]
            ],
            "Elements": ["NOT", "NOT", "NOT", "AND"],
            "Message": "De Morgan's Theorem\nConstruct OR Gate"
        },

        {
            "Inputs": ["In1", "In2"],
            "Outputs": [
                ["Out1", function () {
                    return op.and(ArrayOfIn[0].getOutput(0), ArrayOfIn[1].getOutput(0));
                }]
            ],
            "Elements": ["NOT", "NOT", "NOT", "OR"],
            "Message": "De Morgan's Theorem\nConstruct AND Gate"
        },

        {
            "Inputs": ["P", "Q"],
            "Outputs": [
                ["Out1", function () {
                    return op.or(op.not(ArrayOfIn[0].getOutput(0)), ArrayOfIn[1].getOutput(0));
                }]
            ],
            "Elements": ["NOT", "NOT", "AND"],
            "Message": "De Morgan's Theorem\nConstruct P->Q"
        },


        //Understanding NAND gate
        {
            "Inputs": ["In1"],
            "Outputs": [
                ["Out1", function () {
                    return op.not(ArrayOfIn[0].getOutput(0));
                }]
            ],
            "Elements": ["NAND"],
            "Message": "Understanding NAND gate\nConstruct NOT Gate"
        },

        {
            "Inputs": ["In1", "In2"],
            "Outputs": [
                ["Out1", function () {
                    return op.or(ArrayOfIn[0].getOutput(0), ArrayOfIn[1].getOutput(0));
                }]
            ],
            "Elements": ["NAND", "NAND", "NAND"],
            "Message": "Understanding NAND gate\nConstruct OR Gate"
        },

        //Understanding Half_Adder
        {
            "Inputs": ["In1", "In2"],
            "Outputs": [
                ["Out1", function () {
                    return op.nand(ArrayOfIn[0].getOutput(0), ArrayOfIn[1].getOutput(0));
                }]
            ],
            "Elements": ["Half_Adder", "Half_Adder", "Half_Adder", "Const_In1", "Const_In0"],
            "Message": "Half_Adder Challenge\nConstruct NAND Gate"
        },



        {
            "Inputs": ["In1", "In2"],
            "Outputs": [
                ["Out1", function () { return op.nor(ArrayOfIn[0].getOutput(0), ArrayOfIn[1].getOutput(0)); }]
            ],
            "Elements": ["Half_Adder", "Half_Adder", "Half_Adder", "Const_In1", "Const_In1", "Const_In0"],
            "Message": "Half_Adder Challenge\nConstruct NOR gate"
        },

        //Shannon Expansion Theorem
        {
            "Inputs": ["C", "x1", "x2"],
            "Outputs": [
                ["Out1", function () {
                    if (ArrayOfIn[0].getOutput(0) == "0") {
                        return ArrayOfIn[1].getOutput(0);
                    }
                    else {
                        return ArrayOfIn[2].getOutput(0);
                    }
                }]
            ],
            "Elements": ["AND", "AND", "AND", "AND", "XOR", "NOT", "NOT", "NOT"],
            "Message": "Shannon Expansion Theorem\nIf C = 0: Select x1\nelse: Select x2"
        },

    ]

    return JSON_Array;
}

const ProblemSet = returnProblemSet();