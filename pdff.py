from PyPDF2 import PdfReader


def extract(pathh):
    reader = PdfReader(pathh)

    page = reader.pages[0]

    text = page.extract_text()
    return text
