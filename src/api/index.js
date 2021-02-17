
import axios from 'axios';

const requests = {
  get: async (url) => {
    try {
     const resp = await axios.get(url);
     return { status: 1, data: resp.data };
   } catch (e) {

             return {
               status: 1,
               data:  [
            {
              "id": "1",
              "name": "Tariff - name - 1",
              "price": 23,
              "upload_speed": 47,
              "download_speed": 80,
              "benefits": [
                "Tariff - name 1 - Benefit 1",
                "Tariff - name 1 - Benefit 2",
                "Tariff - name 1 - Benefit 3"
              ]
            },
            {
              "id": "2",
              "name": "Tariff - name - 2",
              "price": 73,
              "upload_speed": 6,
              "download_speed": 35,
              "benefits": [
                "Tariff - name 2 - Benefit 1",
                "Tariff - name 2 - Benefit 2",
                "Tariff - name 2 - Benefit 3"
              ]
            },
            {
              "id": "3",
              "name": "Tariff - name - 3",
              "price": 43,
              "upload_speed": 68,
              "download_speed": 94,
              "benefits": [
                "Tariff - name 3 - Benefit 1",
                "Tariff - name 3 - Benefit 2",
                "Tariff - name 3 - Benefit 3"
              ]
            },
            {
              "id": "4",
              "name": "Tariff - name - 4",
              "price": 96,
              "upload_speed": 67,
              "download_speed": 97,
              "benefits": [
                "Tariff - name 4 - Benefit 1",
                "Tariff - name 4 - Benefit 2",
                "Tariff - name 4 - Benefit 3"
              ]
            },
            {
              "id": "5",
              "name": "Tariff - name - 5",
              "price": 58,
              "upload_speed": 74,
              "download_speed": 4,
              "benefits": [
                "Tariff - name 5 - Benefit 1",
                "Tariff - name 5 - Benefit 2",
                "Tariff - name 5 - Benefit 3"
              ]
            },
            {
              "id": "6",
              "name": "Tariff - name - 6",
              "price": 33,
              "upload_speed": 94,
              "download_speed": 15,
              "benefits": [
                "Tariff - name 6 - Benefit 1",
                "Tariff - name 6 - Benefit 2",
                "Tariff - name 6 - Benefit 3"
              ]
            },
            {
              "id": "7",
              "name": "Tariff - name - 7",
              "price": 59,
              "upload_speed": 27,
              "download_speed": 18,
              "benefits": [
                "Tariff - name 7 - Benefit 1",
                "Tariff - name 7 - Benefit 2",
                "Tariff - name 7 - Benefit 3"
              ]
            },
            {
              "id": "8",
              "name": "Tariff - name - 8",
              "price": 60,
              "upload_speed": 50,
              "download_speed": 8,
              "benefits": [
                "Tariff - name 8 - Benefit 1",
                "Tariff - name 8 - Benefit 2",
                "Tariff - name 8 - Benefit 3"
              ]
            },
            {
              "id": "9",
              "name": "Tariff - name - 9",
              "price": 88,
              "upload_speed": 39,
              "download_speed": 21,
              "benefits": [
                "Tariff - name 9 - Benefit 1",
                "Tariff - name 9 - Benefit 2",
                "Tariff - name 9 - Benefit 3"
              ]
            },
            {
              "id": "10",
              "name": "Tariff - name - 10",
              "price": 13,
              "upload_speed": 10,
              "download_speed": 5,
              "benefits": [
                "Tariff - name 10 - Benefit 1",
                "Tariff - name 10 - Benefit 2",
                "Tariff - name 10 - Benefit 3"
              ]
            },
            {
              "id": "11",
              "name": "Tariff - name - 11",
              "price": 26,
              "upload_speed": 61,
              "download_speed": 48,
              "benefits": [
                "Tariff - name 11 - Benefit 1",
                "Tariff - name 11 - Benefit 2",
                "Tariff - name 11 - Benefit 3"
              ]
            },
            {
              "id": "12",
              "name": "Tariff - name - 12",
              "price": 28,
              "upload_speed": 16,
              "download_speed": 26,
              "benefits": [
                "Tariff - name 12 - Benefit 1",
                "Tariff - name 12 - Benefit 2",
                "Tariff - name 12 - Benefit 3"
              ]
            },
            {
              "id": "13",
              "name": "Tariff - name - 13",
              "price": 99,
              "upload_speed": 75,
              "download_speed": 25,
              "benefits": [
                "Tariff - name 13 - Benefit 1",
                "Tariff - name 13 - Benefit 2",
                "Tariff - name 13 - Benefit 3"
              ]
            },
            {
              "id": "14",
              "name": "Tariff - name - 14",
              "price": 21,
              "upload_speed": 12,
              "download_speed": 20,
              "benefits": [
                "Tariff - name 14 - Benefit 1",
                "Tariff - name 14 - Benefit 2",
                "Tariff - name 14 - Benefit 3"
              ]
            },
            {
              "id": "15",
              "name": "Tariff - name - 15",
              "price": 50,
              "upload_speed": 0,
              "download_speed": 74,
              "benefits": [
                "Tariff - name 15 - Benefit 1",
                "Tariff - name 15 - Benefit 2",
                "Tariff - name 15 - Benefit 3"
              ]
            },
            {
              "id": "16",
              "name": "Tariff - name - 16",
              "price": 10,
              "upload_speed": 80,
              "download_speed": 41,
              "benefits": [
                "Tariff - name 16 - Benefit 1",
                "Tariff - name 16 - Benefit 2",
                "Tariff - name 16 - Benefit 3"
              ]
            },
            {
              "id": "17",
              "name": "Tariff - name - 17",
              "price": 71,
              "upload_speed": 16,
              "download_speed": 17,
              "benefits": [
                "Tariff - name 17 - Benefit 1",
                "Tariff - name 17 - Benefit 2",
                "Tariff - name 17 - Benefit 3"
              ]
            },
            {
              "id": "18",
              "name": "Tariff - name - 18",
              "price": 40,
              "upload_speed": 17,
              "download_speed": 17,
              "benefits": [
                "Tariff - name 18 - Benefit 1",
                "Tariff - name 18 - Benefit 2",
                "Tariff - name 18 - Benefit 3"
              ]
            },
            {
              "id": "19",
              "name": "Tariff - name - 19",
              "price": 25,
              "upload_speed": 28,
              "download_speed": 55,
              "benefits": [
                "Tariff - name 19 - Benefit 1",
                "Tariff - name 19 - Benefit 2",
                "Tariff - name 19 - Benefit 3"
              ]
            },
            {
              "id": "20",
              "name": "Tariff - name - 20",
              "price": 62,
              "upload_speed": 98,
              "download_speed": 61,
              "benefits": [
                "Tariff - name 20 - Benefit 1",
                "Tariff - name 20 - Benefit 2",
                "Tariff - name 20 - Benefit 3"
              ]
            },
            {
              "id": "21",
              "name": "Tariff - name - 21",
              "price": 84,
              "upload_speed": 69,
              "download_speed": 1,
              "benefits": [
                "Tariff - name 21 - Benefit 1",
                "Tariff - name 21 - Benefit 2",
                "Tariff - name 21 - Benefit 3"
              ]
            },
            {
              "id": "22",
              "name": "Tariff - name - 22",
              "price": 66,
              "upload_speed": 31,
              "download_speed": 89,
              "benefits": [
                "Tariff - name 22 - Benefit 1",
                "Tariff - name 22 - Benefit 2",
                "Tariff - name 22 - Benefit 3"
              ]
            },
            {
              "id": "23",
              "name": "Tariff - name - 23",
              "price": 38,
              "upload_speed": 0,
              "download_speed": 8,
              "benefits": [
                "Tariff - name 23 - Benefit 1",
                "Tariff - name 23 - Benefit 2",
                "Tariff - name 23 - Benefit 3"
              ]
            },
            {
              "id": "24",
              "name": "Tariff - name - 24",
              "price": 3,
              "upload_speed": 21,
              "download_speed": 51,
              "benefits": [
                "Tariff - name 24 - Benefit 1",
                "Tariff - name 24 - Benefit 2",
                "Tariff - name 24 - Benefit 3"
              ]
            },
            {
              "id": "25",
              "name": "Tariff - name - 25",
              "price": 70,
              "upload_speed": 78,
              "download_speed": 30,
              "benefits": [
                "Tariff - name 25 - Benefit 1",
                "Tariff - name 25 - Benefit 2",
                "Tariff - name 25 - Benefit 3"
              ]
            },
            {
              "id": "26",
              "name": "Tariff - name - 26",
              "price": 94,
              "upload_speed": 29,
              "download_speed": 1,
              "benefits": [
                "Tariff - name 26 - Benefit 1",
                "Tariff - name 26 - Benefit 2",
                "Tariff - name 26 - Benefit 3"
              ]
            },
            {
              "id": "27",
              "name": "Tariff - name - 27",
              "price": 14,
              "upload_speed": 37,
              "download_speed": 38,
              "benefits": [
                "Tariff - name 27 - Benefit 1",
                "Tariff - name 27 - Benefit 2",
                "Tariff - name 27 - Benefit 3"
              ]
            },
            {
              "id": "28",
              "name": "Tariff - name - 28",
              "price": 55,
              "upload_speed": 80,
              "download_speed": 70,
              "benefits": [
                "Tariff - name 28 - Benefit 1",
                "Tariff - name 28 - Benefit 2",
                "Tariff - name 28 - Benefit 3"
              ]
            },
            {
              "id": "29",
              "name": "Tariff - name - 29",
              "price": 60,
              "upload_speed": 91,
              "download_speed": 18,
              "benefits": [
                "Tariff - name 29 - Benefit 1",
                "Tariff - name 29 - Benefit 2",
                "Tariff - name 29 - Benefit 3"
              ]
            },
            {
              "id": "30",
              "name": "Tariff - name - 30",
              "price": 34,
              "upload_speed": 41,
              "download_speed": 26,
              "benefits": [
                "Tariff - name 30 - Benefit 1",
                "Tariff - name 30 - Benefit 2",
                "Tariff - name 30 - Benefit 3"
              ]
            },
            {
              "id": "31",
              "name": "Tariff - name - 31",
              "price": 66,
              "upload_speed": 15,
              "download_speed": 77,
              "benefits": [
                "Tariff - name 31 - Benefit 1",
                "Tariff - name 31 - Benefit 2",
                "Tariff - name 31 - Benefit 3"
              ]
            },
            {
              "id": "32",
              "name": "Tariff - name - 32",
              "price": 91,
              "upload_speed": 23,
              "download_speed": 24,
              "benefits": [
                "Tariff - name 32 - Benefit 1",
                "Tariff - name 32 - Benefit 2",
                "Tariff - name 32 - Benefit 3"
              ]
            },
            {
              "id": "33",
              "name": "Tariff - name - 33",
              "price": 3,
              "upload_speed": 97,
              "download_speed": 27,
              "benefits": [
                "Tariff - name 33 - Benefit 1",
                "Tariff - name 33 - Benefit 2",
                "Tariff - name 33 - Benefit 3"
              ]
            },
            {
              "id": "34",
              "name": "Tariff - name - 34",
              "price": 76,
              "upload_speed": 70,
              "download_speed": 3,
              "benefits": [
                "Tariff - name 34 - Benefit 1",
                "Tariff - name 34 - Benefit 2",
                "Tariff - name 34 - Benefit 3"
              ]
            },
            {
              "id": "35",
              "name": "Tariff - name - 35",
              "price": 77,
              "upload_speed": 59,
              "download_speed": 89,
              "benefits": [
                "Tariff - name 35 - Benefit 1",
                "Tariff - name 35 - Benefit 2",
                "Tariff - name 35 - Benefit 3"
              ]
            },
            {
              "id": "36",
              "name": "Tariff - name - 36",
              "price": 82,
              "upload_speed": 92,
              "download_speed": 76,
              "benefits": [
                "Tariff - name 36 - Benefit 1",
                "Tariff - name 36 - Benefit 2",
                "Tariff - name 36 - Benefit 3"
              ]
            },
            {
              "id": "37",
              "name": "Tariff - name - 37",
              "price": 85,
              "upload_speed": 71,
              "download_speed": 32,
              "benefits": [
                "Tariff - name 37 - Benefit 1",
                "Tariff - name 37 - Benefit 2",
                "Tariff - name 37 - Benefit 3"
              ]
            },
            {
              "id": "38",
              "name": "Tariff - name - 38",
              "price": 42,
              "upload_speed": 49,
              "download_speed": 44,
              "benefits": [
                "Tariff - name 38 - Benefit 1",
                "Tariff - name 38 - Benefit 2",
                "Tariff - name 38 - Benefit 3"
              ]
            },
            {
              "id": "39",
              "name": "Tariff - name - 39",
              "price": 26,
              "upload_speed": 31,
              "download_speed": 43,
              "benefits": [
                "Tariff - name 39 - Benefit 1",
                "Tariff - name 39 - Benefit 2",
                "Tariff - name 39 - Benefit 3"
              ]
            },
            {
              "id": "40",
              "name": "Tariff - name - 40",
              "price": 49,
              "upload_speed": 98,
              "download_speed": 56,
              "benefits": [
                "Tariff - name 40 - Benefit 1",
                "Tariff - name 40 - Benefit 2",
                "Tariff - name 40 - Benefit 3"
              ]
            },
            {
              "id": "41",
              "name": "Tariff - name - 41",
              "price": 42,
              "upload_speed": 18,
              "download_speed": 69,
              "benefits": [
                "Tariff - name 41 - Benefit 1",
                "Tariff - name 41 - Benefit 2",
                "Tariff - name 41 - Benefit 3"
              ]
            },
            {
              "id": "42",
              "name": "Tariff - name - 42",
              "price": 27,
              "upload_speed": 55,
              "download_speed": 11,
              "benefits": [
                "Tariff - name 42 - Benefit 1",
                "Tariff - name 42 - Benefit 2",
                "Tariff - name 42 - Benefit 3"
              ]
            },
            {
              "id": "43",
              "name": "Tariff - name - 43",
              "price": 97,
              "upload_speed": 39,
              "download_speed": 87,
              "benefits": [
                "Tariff - name 43 - Benefit 1",
                "Tariff - name 43 - Benefit 2",
                "Tariff - name 43 - Benefit 3"
              ]
            },
            {
              "id": "44",
              "name": "Tariff - name - 44",
              "price": 4,
              "upload_speed": 19,
              "download_speed": 51,
              "benefits": [
                "Tariff - name 44 - Benefit 1",
                "Tariff - name 44 - Benefit 2",
                "Tariff - name 44 - Benefit 3"
              ]
            },
            {
              "id": "45",
              "name": "Tariff - name - 45",
              "price": 71,
              "upload_speed": 15,
              "download_speed": 92,
              "benefits": [
                "Tariff - name 45 - Benefit 1",
                "Tariff - name 45 - Benefit 2",
                "Tariff - name 45 - Benefit 3"
              ]
            },
            {
              "id": "46",
              "name": "Tariff - name - 46",
              "price": 82,
              "upload_speed": 27,
              "download_speed": 89,
              "benefits": [
                "Tariff - name 46 - Benefit 1",
                "Tariff - name 46 - Benefit 2",
                "Tariff - name 46 - Benefit 3"
              ]
            },
            {
              "id": "47",
              "name": "Tariff - name - 47",
              "price": 47,
              "upload_speed": 86,
              "download_speed": 5,
              "benefits": [
                "Tariff - name 47 - Benefit 1",
                "Tariff - name 47 - Benefit 2",
                "Tariff - name 47 - Benefit 3"
              ]
            },
            {
              "id": "48",
              "name": "Tariff - name - 48",
              "price": 8,
              "upload_speed": 58,
              "download_speed": 60,
              "benefits": [
                "Tariff - name 48 - Benefit 1",
                "Tariff - name 48 - Benefit 2",
                "Tariff - name 48 - Benefit 3"
              ]
            },
            {
              "id": "49",
              "name": "Tariff - name - 49",
              "price": 51,
              "upload_speed": 32,
              "download_speed": 38,
              "benefits": [
                "Tariff - name 49 - Benefit 1",
                "Tariff - name 49 - Benefit 2",
                "Tariff - name 49 - Benefit 3"
              ]
            },
            {
              "id": "50",
              "name": "Tariff - name - 50",
              "price": 59,
              "upload_speed": 42,
              "download_speed": 99,
              "benefits": [
                "Tariff - name 50 - Benefit 1",
                "Tariff - name 50 - Benefit 2",
                "Tariff - name 50 - Benefit 3"
              ]
            }
          ]
              };
    }
  }
}

export default requests;
