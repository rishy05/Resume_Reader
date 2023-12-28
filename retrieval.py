from transformers import AutoModelForQuestionAnswering, AutoTokenizer, pipeline
import time
import torch
import pandas as pd
from reader import extract


def get_info(form_data):
    start = time.time()

    model_name = "deepset/deberta-v3-large-squad2"
    response = {}
    model = AutoModelForQuestionAnswering.from_pretrained(model_name)
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    device = "cuda:0" if torch.cuda.is_available() else "cpu"

    # a) Get predictions
    nlp = pipeline(
        "question-answering", model=model, tokenizer=tokenizer, device=device
    )
    name = {"question": "name of the person", "context": form_data}
    ph_num = {
        "question": "phone number of the person which is a number",
        "context": form_data,
    }
    dob = {"question": "date of birth of the person", "context": form_data}
    gender = {"question": "gender of the person", "context": form_data}
    location = {
        "question": "Location of the person which is a or a state or a country or a combination of those 3 ",
        "context": form_data,
    }
    salary = {"question": "salary of the person", "context": form_data}

    response["name"] = nlp(name)["answer"]
    response["phone number"] = nlp(ph_num)["answer"]
    response["dob"] = nlp(dob)["answer"]
    response["gender"] = nlp(gender)["answer"]
    response["location"] = nlp(location)["answer"]
    response["salary"] = nlp(salary)["answer"]
    end = time.time()

    print(end - start)
    return str(response)


def get_sheet(form_data):
    name = []
    git = []
    linked = []
    phone = []
    email = []
    start = time.time()

    model_name = "deepset/deberta-v3-large-squad2"
    model = AutoModelForQuestionAnswering.from_pretrained(model_name)
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    device = "cuda:0" if torch.cuda.is_available() else "cpu"

    # a) Get predictions
    nlp = pipeline(
        "question-answering", model=model, tokenizer=tokenizer, device=device
    )
    name_d = {"question": "name of the person", "context": form_data}
    phone_d = {
        "question": "phone number of the person which is a number",
        "context": form_data,
    }
    git_d = {
        "question": "Git hub link of the person",
        "context": form_data,
    }
    link_d = {
        "question": "Linkedin link of the person",
        "context": form_data,
    }
    email_d = {
        "question": "email of the person",
        "context": form_data,
    }
    exp_d = {
        "question": "experience of the person the previous organisations he worked in.",
        "context": form_data,
    }
    project_d = {
        "question": "project",
        "context": form_data,
    }
    d = {}
    name.append(nlp(name_d)["answer"])
    phone.append(nlp(phone_d)["answer"])
    gg = nlp(git_d)["answer"]
    ll = nlp(link_d)["answer"]
    if gg[:3] == "http" or gg[:4] == " http":
        git.append(nlp(git_d)["answer"])
    else:
        git.append(f"""https://{nlp(git_d)["answer"]}""")
    if ll[:3] == "http" or ll[:4] == " http":
        git.append(nlp(link_d)["answer"])
    else:
        git.append(f"""https://{nlp(link_d)["answer"]}""")
    for i in git:
        if "linked" in i:
            if i not in linked:
                linked.append(git.pop(git.index(i)))
            else:
                git.pop(git.index(i))
    for i in linked:
        if "git" in i:
            if i not in git:
                git.append(linked.pop(linked.index(i)))
            else:
                linked.pop(linked.index(i))
    email.append(nlp(email_d)["answer"])
    end = time.time()
    d = {
        "Name": name,
        "Phone number": phone,
        "Github": git,
        "Linkedin": linked,
        "Email": email,
    }
    print(d)
    df = pd.DataFrame(d)
    df.to_excel("data.xlsx")

    print(end - start)
