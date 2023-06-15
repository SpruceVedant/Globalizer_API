const mongoose = require('mongoose');

const Studentschema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'user',
        required:true
    },
    basicDetails: {
        firstName: {
            type: String,
        },
        middleName: {
            type: String
        },
        lastName: {
            type: String,
        },
        dob: {
            type: Date,
        },
        email: {
            type: String,

        },
        gender: {
            type: String
        },
        contactDetails: {
            phoneNumber: {
                type: Number,
            },
            curAddress: {
                type: String,
            },
            permAddress: {
                type: String,
            }
        }
    },
    education: {
        highestDegree: {
            instituteID:{
                type:Number
            },
            instituteName: {
                type: String,
            },
            degree: {
                type: String,
            },
            branch: {
                type: String,
            },
            aggregate: {
                type: mongoose.Types.Decimal128,
            },
            tenure: {
                start: {
                    type: Date,
                },
                end: {
                    type: Date,
                }
            },
            isLateral:{
                type:Boolean
            }
        },
        twelth: {
            diploma: {
                type:Boolean
            },
            name: {
                type: String,
            },
            board: {
                type: String,
            },
            stream: {
                type: String,

            },
            aggregate: {
                type: mongoose.Types.Decimal128,
            },
            tenure: {
                start: {
                    type: Date,

                },
                end: {
                    type: Date,

                }
            }
        },
        tenth: {
            name: {
                type: String,

            },
            board: {
                type: String,

            },
            aggregate: {
                type: mongoose.Types.Decimal128,

            },
            tenure: {
                start: {
                    type: Date,

                },
                end: {
                    type: Date,

                }
            }
        },
    },
    project: {
        title: {
            type: String,
        },
        organisation: {
            type: String
        },
        location: {
            type: String
        },
        tenure: {
            start: {
                type: Date,

            },
            end: {
                type: Date,

            }
        },
        description: {
            type: String
        },
        current: {
            type: Boolean
        }
    },
    responsibilities: {
        title: {
            type: String,
        },
        organisation: {
            type: String
        },
        location: {
            type: String
        },
        tenure: {
            start: {
                type: Date,

            },
            end: {
                type: Date,

            }
        },
        description: {
            type: String
        },
        current: {
            type: Boolean
        }
    },
    accomplishments: {
        title: {
            type: String,
        },
        organisation: {
            type: String
        },
        location: {
            type: String
        },
        tenure: {
            start: {
                type: Date,

            },
            end: {
                type: Date,

            }
        },
        description: {
            type: String
        },
        current: {
            type: Boolean
        }
    },
    volunteering: {
        title: {
            type: String,
        },
        organisation: {
            type: String
        },
        location: {
            type: String
        },
        tenure: {
            start: {
                type: Date,

            },
            end: {
                type: Date,

            }
        },
        description: {
            type: String
        },
        current: {
            type: Boolean
        }
    },
    internship: {
        title: {
            type: String,
        },
        location: {
            type: String
        },
        organisation: {
            type: String
        },
        tenure: {
            start: {
                type: Date,

            },
            end: {
                type: Date,

            }
        },
        description: {
            type: String
        },
        current: {
            type: Boolean
        }
    }
});

module.exports = mongoose.model("studentprofile", Studentschema);

